import { Challenge } from '../types';

export const freeChallenge: Challenge[] = [
  {
    id: 1,
    day: 1,
    title: 'Verstehe dein ADHS-Gehirn',
    description: 'Lerne, wie dein ADHS-Gehirn anders funktioniert und wie du seine Stärken nutzen kannst.',
    content: 'Tag 1 Inhalt würde hier mit Übungen und Lernmaterialien über das ADHS-Gehirn angezeigt werden.',
    isPremium: false
  },
  {
    id: 2,
    day: 2,
    title: 'Gestalte eine effektive Lernumgebung',
    description: 'Richte deinen Arbeitsplatz ein, um Ablenkungen zu minimieren und den Fokus zu maximieren.',
    content: 'Tag 2 Inhalt würde erklären, wie man die optimale Lernumgebung für ein ADHS-Gehirn schafft.',
    isPremium: false
  },
  {
    id: 3,
    day: 3,
    title: 'Zeitmanagement-Techniken',
    description: 'Lerne spezialisierte Zeitmanagement-Strategien für ADHS.',
    content: 'Tag 3 Inhalt würde Techniken wie Zeitblockierung, die Pomodoro-Methode und andere ADHS-freundliche Ansätze behandeln.',
    isPremium: false
  },
  {
    id: 4,
    day: 4,
    title: 'Gedächtnistechniken für ADHS',
    description: 'Entdecke Strategien zur Gedächtnisverbesserung, die auf ADHS-Gehirne zugeschnitten sind.',
    content: 'Tag 4 Inhalt würde Visualisierung, Assoziation und andere Gedächtnistechniken erforschen.',
    isPremium: false
  },
  {
    id: 5,
    day: 5,
    title: 'Nachhaltige Lerngewohnheiten aufbauen',
    description: 'Entwickle dauerhafte Gewohnheiten, die mit deinem ADHS-Gehirn arbeiten, nicht dagegen.',
    content: 'Tag 5 Inhalt würde dich durch die Etablierung von Routinen und Gewohnheiten führen, die bleiben.',
    isPremium: false
  }
];

export const premiumChallenge: Challenge[] = [
  ...freeChallenge,
  {
    id: 6,
    day: 6,
    title: 'Fortgeschrittene Fokustechniken',
    description: 'Beherrsche fortgeschrittene Methoden, um tiefe Fokuszustände zu erreichen.',
    content: 'Tag 6 Inhalt würde Flow-Zustände und wie man sie mit ADHS erreicht, erforschen.',
    isPremium: true
  },
  {
    id: 7,
    day: 7,
    title: 'Emotionale Regulation beim Lernen',
    description: 'Lerne, Frustration und Angst beim Lernen zu bewältigen.',
    content: 'Tag 7 Inhalt würde Strategien zur emotionalen Regulation während herausfordernder Lernaufgaben bereitstellen.',
    isPremium: true
  },
  {
    id: 30,
    day: 30,
    title: 'Deine personalisierte ADHS-Lernstrategie',
    description: 'Fasse alles Gelernte zu deinem individuellen Ansatz zusammen.',
    content: 'Tag 30 Inhalt würde dir helfen, deine personalisierte ADHS-Lernstrategie basierend auf dem zu erstellen, was für dich am besten funktioniert hat.',
    isPremium: true
  }
];