import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface Weapon {
    name: string;
    name_en?: string;
    id: number;
    bigClassName: string;
    bigClassName_en: string;
    middleClassName: string;
    middleClassName_en: string;
    subWeaponId: number;
    specialWeaponId: number;
  }

  interface AnswerForm {
    subWeaponId: number | null;
    specialWeaponId: number | null;
  }
}
