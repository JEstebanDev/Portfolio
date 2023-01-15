import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ListRepositoriesCustom } from '../../interface/ListRepositoriesCustom.interface';
import { Topics } from '../../interface/topics.interface';
import { GitHubService } from '../../service/git-hub.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [],
})
export class ProjectComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private GitHubService: GitHubService
  ) {}
  listProject: Topics[] = [];
  listRepositoriesCustom: ListRepositoriesCustom[] = [];
  filterList: ListRepositoriesCustom[] = [];
  ngOnInit(): void {
    this.GitHubService.getListAdditionals().subscribe((repositories) => {
      repositories.map((obj: any) => {
        this.listRepositoriesCustom.push({
          id: obj.id,
          description: obj.description,
          htmlURL: obj.html_url,
          imageURL: `https://raw.githubusercontent.com//JEstebanDev/${
            obj.name
          }/main/${obj.name.toLowerCase()}.jpg`,
          name: obj.name,
          topics: obj.topics,
        });
      });
      this.filterList = this.listRepositoriesCustom;
      repositories
        .map((obj) => obj.topics)
        .forEach((obj: any) => {
          obj.forEach((element: any) => {
            this.addTopic(element);
            this.listProject.sort((a, b) => a.id - b.id);
          });
        });
    });
  }

  form: FormGroup = this.formBuilder.group({
    topics: new FormArray([]),
  });

  addTopic(name: string) {
    if (this.listProject.find((data) => data.name.toLowerCase() === name)) {
    } else {
      this.ListTopics.forEach((element) => {
        if (element.name.toLowerCase() === name) {
          this.listProject.push(element);
        }
      });
    }
  }

  search(values: any) {
    this.filterList = [];
    if (values.length > 0) {
      this.listRepositoriesCustom.map((obj) => {
        let found = obj.topics.filter((e) => values.includes(e));
        if (found.length > 0) {
          this.filterList.push(obj);
        }
      });
    } else {
      this.filterList = this.listRepositoriesCustom;
    }
  }

  ListTopics: Topics[] = [
    { id: 1, name: 'HTML', url: 'assets/icon-projects/html.svg' },
    { id: 2, name: 'CSS', url: 'assets/icon-projects/css.svg' },
    { id: 3, name: 'Sass', url: 'assets/icon-projects/sass.svg' },
    { id: 4, name: 'JavaScript', url: 'assets/icon-projects/javascript.svg' },
    { id: 5, name: 'TypeScript', url: 'assets/icon-projects/typescript.svg' },
    { id: 6, name: 'Angular', url: 'assets/icon-projects/angular.svg' },
    { id: 7, name: 'React', url: 'assets/icon-projects/react.svg' },
    { id: 8, name: 'NextJs', url: 'assets/icon-projects/nextjs.svg' },
    { id: 9, name: 'Java', url: 'assets/icon-projects/java.svg' },
    { id: 10, name: 'SpringBoot', url: 'assets/icon-projects/spring.svg' },
    { id: 11, name: 'Csharp', url: 'assets/icon-projects/csharp.svg' },
    { id: 12, name: 'Dart', url: 'assets/icon-projects/dart.svg' },
    { id: 13, name: 'Flutter', url: 'assets/icon-projects/flutter.svg' },
    { id: 14, name: 'Redux', url: 'assets/icon-projects/redux.svg' },
    { id: 15, name: 'Graphql', url: 'assets/icon-projects/graphql.svg' },
    { id: 16, name: 'SqlServer', url: 'assets/icon-projects/sqlserver.svg' },
    { id: 17, name: 'MySql', url: 'assets/icon-projects/mysql.svg' },
    { id: 18, name: 'PostgreSQL', url: 'assets/icon-projects/postgresql.svg' },
    { id: 19, name: 'MongoDB', url: 'assets/icon-projects/mongodb.svg' },
    { id: 20, name: 'FireBase', url: 'assets/icon-projects/firebase.svg' },
    { id: 21, name: 'AWS', url: 'assets/icon-projects/devops-aws.svg' },
    { id: 22, name: 'Azure', url: 'assets/icon-projects/devops-azure.svg' },
    { id: 23, name: 'Docker', url: 'assets/icon-projects/devops-docker.svg' },
    { id: 24, name: 'Jenkins', url: 'assets/icon-projects/devops-jenkins.svg' },
    {
      id: 25,
      name: 'Kubernetes',
      url: 'assets/icon-projects/devops-kubernetes.svg',
    },
    {
      id: 26,
      name: 'Terraform',
      url: 'assets/icon-projects/devops-terraform.svg',
    },
    { id: 27, name: 'Ansible', url: 'assets/icon-projects/devops-ansible.svg' },
    {
      id: 28,
      name: 'Prometheus',
      url: 'assets/icon-projects/devops-prometheus.svg',
    },
  ];
}
