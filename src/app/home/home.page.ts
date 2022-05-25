import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  section: string;
  scrollAmount: number;
  sectionOne: string;
  doscorn: string;
  case: string;
  death: string;
  vac: string;
  sit: string;
  crowd: string;
  sectionTwo: string;
  sectionThree: string;
  sectionFour: string;
  sectionFive: string;
  sectionSix: string;
  language: string;
  updoot: string;
  updootOnBusi: string;
  safeTravol: string;
  travolRes: string;
  SgTravol: string;
  oneMap: string;
  faq: string;
  ART: string;
  check: string;
  news1: string;
  news2: string;
  news3: string;
  defaultLanguage: string = "en";

  @ViewChild(IonContent) content: IonContent;

  constructor(private translate: TranslateService) {}

  ionViewDidEnter(){
    this.setLanguage();
  }

  scrollTo(element:string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollToPoint(0, yOffset, 1000)
  }

  openDORSCONLevelExplanation(){
    if (this.language === "en") {
      window.open("https://www.gov.sg/article/what-do-the-different-dorscon-levels-mean")
    }
    if (this.language === "cn") {
      window.open("https://www-gov-sg.translate.goog/article/what-do-the-different-dorscon-levels-mean?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-GB")
    }
    if (this.language === "bm") {
      window.open("https://www-gov-sg.translate.goog/article/what-do-the-different-dorscon-levels-mean?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-GB")
    }
    if (this.language === "tm") {
      window.open("https://www-gov-sg.translate.goog/article/what-do-the-different-dorscon-levels-mean?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-GB")
    }
  }

  openMOHWebsite(){
    if (this.language === "en") {
      window.open("https://www.moh.gov.sg/")
    }
    if (this.language === "cn") {
      window.open("https://www-moh-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-GB")
    }
    if (this.language === "bm") {
      window.open("https://www-moh-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-GB")
    }
    if (this.language === "tm") {
      window.open("https://www-moh-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-GB")
    }
  }

  openMOHSituationReport(){
    window.open("https://covidsitrep.moh.gov.sg/")
  }

  openMOHVaccinationProgress(){
    if (this.language === "en") {
      window.open("https://www.moh.gov.sg/covid-19/vaccination")
    }
    if (this.language === "cn") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19/vaccination?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-GB")
    }
    if (this.language === "bm") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19/vaccination?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-GB")
    }
    if (this.language === "tm") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19/vaccination?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-GB")
    }
  }

  openSpaceOut(){
    window.open("https://www.spaceout.gov.sg/")
  }

  updatesOnSg(){
    if (this.language === "en") {
      window.open("https://www.moh.gov.sg/covid-19")
    }
    if (this.language === "cn") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
    if (this.language === "bm") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
    if (this.language === "tm") {
      window.open("https://www-moh-gov-sg.translate.goog/covid-19?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
  }

  updatesOnSgBus(){
    window.open("https://www.mti.gov.sg/Newsroom/Updates-on-COVID-19")
  }

  safeTravel(){
    if (this.language === "en") {
      window.open("https://safetravel.ica.gov.sg/")
    }
    if (this.language === "cn") {
      window.open("https://safetravel-ica-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
    if (this.language === "bm") {
      window.open("https://safetravel-ica-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=ms&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
    if (this.language === "tm") {
      window.open("https://safetravel-ica-gov-sg.translate.goog/?_x_tr_sl=en&_x_tr_tl=ta&_x_tr_hl=en-GB&_x_tr_pto=wapp")
    }
  }

  jan16(){
    window.open("https://www.channelnewsasia.com/singapore/moh-covid-19-cases-omicron-jan-16-2439111")
  }

  jan15(){
    window.open("https://www.channelnewsasia.com/singapore/singapore-covid-19-cases-moh-omicron-imported-jan-15-2022-2437946")
  }

  jan14(){
    window.open("https://www.straitstimes.com/singapore/health/832-new-covid-19-omicron-cases-infection-growth-rate-falls-to-138")
  }

  travolRes2(){
    window.open("https://www.mfa.gov.sg/Services/Singapore-Citizens/COVID-19-Travel-Restrictions")
  }

  SgTravol2(){
    window.open("https://www.singaporeair.com/en_UK/sg/travel-info/covid-19/")
  }

  unomap(){
    window.open("https://www.onemap.gov.sg/main/v2/vaccination")
  }

  goOneMap(){
    window.open("https://www.onemap.gov.sg/main/v2/vaccination")
  }

  gofaq(){
    window.open("https://ask.gov.sg/agency/moh")
  }

  goART(){
    window.open("https://www.gowhere.gov.sg/art")
  }

  goCovidCheck(){
      window.open("https://www.sgcovidcheck.gov.sg/")
  }

  initialiseTranslation(): void {
    this.translate.get('sectionOne').subscribe((res: string) => {
      this.sectionOne = res;
    });
    this.translate.get('doscorn').subscribe((res: string) => {
      this.doscorn = res;
    });
    this.translate.get('caseNumbers').subscribe((res: string) => {
      this.case = res;
    });
    this.translate.get('deathNumbers').subscribe((res: string) => {
      this.death = res;
    });
    this.translate.get('vac').subscribe((res: string) => {
      this.vac = res;
    });
    this.translate.get('sit').subscribe((res: string) => {
      this.sit = res;
    });
    this.translate.get('crowd').subscribe((res: string) => {
      this.crowd = res;
    });
    this.translate.get('sectionTwo').subscribe((res: string) => {
      this.sectionTwo = res;
    });
    this.translate.get('sectionThree').subscribe((res: string) => {
      this.sectionThree = res;
    });
    this.translate.get('sectionFour').subscribe((res: string) => {
      this.sectionFour = res;
    });
    this.translate.get('sectionFive').subscribe((res: string) => {
      this.sectionFive = res;
    });
    this.translate.get('sectionSix').subscribe((res: string) => {
      this.sectionSix = res;
    });
    this.translate.get('updoot').subscribe((res: string) => {
      this.updoot = res;
    });
    this.translate.get('updootOnBusi').subscribe((res: string) => {
      this.updootOnBusi = res;
    });
    this.translate.get('safeTravol').subscribe((res: string) => {
      this.safeTravol = res;
    });
    this.translate.get('safeTravol').subscribe((res: string) => {
      this.safeTravol = res;
    });
    this.translate.get('travolRes').subscribe((res: string) => {
      this.travolRes = res;
    });
    this.translate.get('SgTravol').subscribe((res: string) => {
      this.SgTravol = res;
    });
    this.translate.get('oneMap').subscribe((res: string) => {
      this.oneMap = res;
    });
    this.translate.get('faq').subscribe((res: string) => {
      this.faq = res;
    });
    this.translate.get('ART').subscribe((res: string) => {
      this.ART = res;
    });
    this.translate.get('check').subscribe((res: string) => {
      this.check = res;
    });
    this.translate.get('news1').subscribe((res: string) => {
      this.news1 = res;
    });
    this.translate.get('news2').subscribe((res: string) => {
      this.news2 = res;
    });
    this.translate.get('news3').subscribe((res: string) => {
      this.news3 = res;
    });
  }

  public setLanguage(): void {
    this.translate.use(this.defaultLanguage);
    this.initialiseTranslation();
  }

  public changeLanguage(): void {
    this.translateLanguage();
  }

  translateLanguage(): void {
    this.translate.use(this.language);
    this.initialiseTranslation();
  }
}
