import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() {}

  async getLandingPage(): Promise<Entry<any>> {
    const res = await this.client.getEntries(
      Object.assign(
        {
          content_type: 'landingPage'
        },
        {
          sys: {
            type: 'ContentType',
            id: 'landingPage'
          }
        }
      )
    );
    return res.items[0];
  }

  // logContent(contentId) {
  //   this.client.getEntry(contentId).then(entry => console.log(entry));
  // }

  // // getContent(contentId) {
  // //   const promise = this.client.getEntry(contentId);
  // //   return Observable.fromPromise(promise).map(entry => entry.fields);
  // // }

  // getTitles(query?: object): Promise<Entry<any>[]> {
  //   return this.client
  //     .getEntries(
  //       Object.assign(
  //         {
  //           content_type: 'title'
  //         },
  //         query
  //       )
  //     )
  //     .then(res => res.items);
  // }

  // getTitle(titleId): Promise<Entry<any>> {
  //   return this.client
  //     .getEntries(
  //       Object.assign(
  //         {
  //           content_type: 'title'
  //         },
  //         {
  //           'sys.id': 'title'
  //         }
  //       )
  //     )
  //     .then(res => res.items[0]);
  // }
}
