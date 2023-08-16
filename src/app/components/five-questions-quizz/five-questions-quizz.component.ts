import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-questions-quizz',
  templateUrl: './five-questions-quizz.component.html',
  styleUrls: ['./five-questions-quizz.component.css'],
})
export class FiveQuestionsQuizzComponent implements OnInit {
  public readonly DATA = [
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'When was the movie &#039;Con Air&#039; released?',
      correct_answer: '1997',
      incorrect_answers: ['1985', '1999', '1990'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'The Queen song `A Kind Of Magic` is featured in which 1986 film?',
      correct_answer: 'Highlander',
      incorrect_answers: ['Flash Gordon', 'Labyrinth', 'Howard the Duck'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What was the first James Bond film?',
      correct_answer: 'Dr. No',
      incorrect_answers: ['Goldfinger', 'From Russia With Love', 'Thunderball'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?',
      correct_answer: 'Ewan McGregor',
      incorrect_answers: ['Alec Guinness', 'Hayden Christensen', 'Liam Neeson'],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who plays the character of Po in the Kung Fu Panda movies?',
      correct_answer: 'Jack Black',
      incorrect_answers: ['Mirana Jonnes', 'McConahey Ramses', 'Jim Petersson'],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
