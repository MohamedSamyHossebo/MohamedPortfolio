import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  ElementRef,
  viewChild,
} from '@angular/core';
import { gsap } from 'gsap';

interface Tech {
  name: string;
  logo: string; // CDN image URL
  light?: boolean; // invert to white on dark bg
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackComponent implements AfterViewInit, OnDestroy {
  trackLeft = viewChild.required<ElementRef<HTMLElement>>('trackLeft');
  trackRight = viewChild.required<ElementRef<HTMLElement>>('trackRight');

  private tweenLeft?: gsap.core.Tween;
  private tweenRight?: gsap.core.Tween;

  readonly techs: Tech[] = [
    {
      name: 'JavaScript',
      logo: `${DEVICON}/javascript/javascript-plain.svg`,
    },
    {
      name: 'TypeScript',
      logo: `${DEVICON}/typescript/typescript-plain.svg`,
    },
    { name: 'Angular', logo: `${DEVICON}/angular/angular-original.svg` },
    { name: 'React', logo: `${DEVICON}/react/react-original.svg` },
    { name: 'Next.js', logo: `${DEVICON}/nextjs/nextjs-original.svg` },
    { name: 'HTML5', logo: `${DEVICON}/html5/html5-original.svg` },
    { name: 'CSS3', logo: `${DEVICON}/css3/css3-original.svg` },
    { name: 'Node.js', logo: `${DEVICON}/nodejs/nodejs-original.svg` },
    { name: 'Git', logo: `${DEVICON}/git/git-original.svg` },
    { name: 'GitLab', logo: `${DEVICON}/gitlab/gitlab-original.svg` },
    { name: 'Sass', logo: `${DEVICON}/sass/sass-original.svg` },
    {
      name: 'TailwindCSS',
      logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
    },
    { name: 'MongoDB', logo: `${DEVICON}/mongodb/mongodb-original.svg` },
    { name: 'Mongoose', logo: './assets/mongoose.svg' },
    { name: 'Express', logo: `${DEVICON}/express/express-original.svg`, light: true },
    { name: 'MySQL', logo: `${DEVICON}/mysql/mysql-original.svg` },
    { name: 'Sequelize', logo: `${DEVICON}/sequelize/sequelize-original.svg` },
    { name: 'Docker', logo: `${DEVICON}/docker/docker-original.svg` },
  ];

  get displayTechs(): Tech[] {
    return [...this.techs, ...this.techs];
  }

  get displayTechsReversed(): Tech[] {
    return [...[...this.techs].reverse(), ...[...this.techs].reverse()];
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startMarquees();
    }
  }

  private startMarquees() {
    const leftEl = this.trackLeft().nativeElement;
    const rightEl = this.trackRight().nativeElement;

    const leftWidth = leftEl.scrollWidth / 2;
    const rightWidth = rightEl.scrollWidth / 2;

    // Row 1: moves LEFT
    this.tweenLeft = gsap.to(leftEl, {
      x: -leftWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % leftWidth),
      },
    });

    // Row 2: moves RIGHT
    gsap.set(rightEl, { x: -rightWidth });
    this.tweenRight = gsap.to(rightEl, {
      x: 0,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => (parseFloat(x) % rightWidth) - rightWidth),
      },
    });

    const pause = () => {
      this.tweenLeft?.pause();
      this.tweenRight?.pause();
    };
    const play = () => {
      this.tweenLeft?.play();
      this.tweenRight?.play();
    };
    leftEl.parentElement?.addEventListener('mouseenter', pause);
    leftEl.parentElement?.addEventListener('mouseleave', play);
    rightEl.parentElement?.addEventListener('mouseenter', pause);
    rightEl.parentElement?.addEventListener('mouseleave', play);
  }

  ngOnDestroy() {
    this.tweenLeft?.kill();
    this.tweenRight?.kill();
  }
}
