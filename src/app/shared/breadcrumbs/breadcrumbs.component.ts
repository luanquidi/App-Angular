import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public title: string;
  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) { 

    this.getInfoPage().subscribe( event => {
      this.title = event;
      this._title.setTitle(event);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.title
      };

      this._meta.updateTag(metaTag);
    });

  }

  ngOnInit() {
    console.log(this.title)
  }

  getInfoPage(){
    return this._router.events.pipe(
      filter(
        (event) => {
          if(event instanceof ActivationEnd && event.snapshot.firstChild === null){
            return true;
          }
        }
      ),
      map((event: ActivationEnd) => {
        return event.snapshot.data.title;
      })
    );
  }
}
