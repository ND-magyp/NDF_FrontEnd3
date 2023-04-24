import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/entidades/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[]=[];

  constructor(

    private servicio: SkillsService,
    ) { }

    listarItems(): void{
    this.servicio.listItems().subscribe(data =>{
      this.skills=data;
    });
  }

  ngOnInit(): void {
    this.listarItems();
  }

}