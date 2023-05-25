import { Component } from '@angular/core';

interface Fruit {
  name: string,
  id: string,
  type: string,
  nutritions: string,
  vitminc: number
}

@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css']
})
export class CreateFruitComponent {

  public fruits: Fruit[] = [{
    name: 'f1',
    id: 'f1',
    type: 'Dry',
    nutritions: 'n1',
    vitminc: 10
  },
  {
    name: 'f2',
    id: 'f2',
    type: 'Dry',
    nutritions: 'n2',
    vitminc: 20
  },
  {
    name: 'f3',
    id: 'f3',
    type: 'Dry',
    nutritions: 'n1',
    vitminc: 50
  },
  {
    name: 'f4',
    id: 'f4',
    type: 'Juicy',
    nutritions: 'n3',
    vitminc: 70
  },
  {
    name: 'f5',
    id: 'f5',
    type: 'Dry',
    nutritions: 'n1',
    vitminc: 10
  },
  {
    name: 'f6',
    id: 'f6',
    type: 'Juicy',
    nutritions: 'n2',
    vitminc: 90
  }
  ]

}
