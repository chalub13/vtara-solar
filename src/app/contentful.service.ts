import { Injectable } from '@angular/core';
import { createClient, Entry, ContentType } from 'contentful';
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

  ngOnInit() {
    console.log('\nWelcome to the Contentful JS Boilerplate\n');
    console.log(
      'This is a simplified example to demonstrate the usage of the Contentful CDA\n'
    );

    this.displayContentTypes()
      .then(this.displayEntries)
      .then(() => {
        console.log('Want to go further? Feel free to check out this guide:');
        console.log(
          'https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/\n'
        );
      })
      .catch(error => {
        console.log('\nError occurred:');
        if (error.stack) {
          console.error(error.stack);
          return;
        }
        console.error(error);
      });
  }

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

  displayContentTypes() {
    console.log('Fetching and displaying Content Types ...');

    return this.fetchContentTypes().then((contentTypes: ContentType[]) => {
      // Display a table with Content Type information
      console.log('Id | Title | Fields');
      contentTypes.forEach(contentType => {
        const fieldNames = contentType.fields.map(field => field.name).sort();
        console.log(
          contentType.sys.id +
            ' | ' +
            contentType.name +
            ' | ' +
            fieldNames.join(', ')
        );
      });

      return contentTypes;
    });
  }

  displayEntries(contentTypes) {
    console.log('Fetching and displaying Entries ...');

    return Promise.all(
      contentTypes.map(contentType => {
        return this.fetchEntriesForContentType(contentType).then(
          (entries: Entry<any>[]) => {
            console.log(
              `\These are the first 100 Entries for Content Type ${
                contentType.name
              }:\n`
            );

            // Display a table with Entry information
            console.log('Id | Title');
            entries.forEach(entry => {
              console.log(
                entry.sys.id + ' | ' + entry.fields[contentType.displayField] ||
                  '[empty]'
              );
            });
          }
        );
      })
    );
  }

  // Load all Content Types in your space from Contentful
  fetchContentTypes() {
    return this.client
      .getContentTypes()
      .then(response => response.items)
      .catch(error => {
        console.log('\nError occurred while fetching Content Types:');
        console.error(error);
      });
  }

  // Load all entries for a given Content Type from Contentful
  fetchEntriesForContentType(contentType) {
    return this.client
      .getEntries({
        content_type: contentType.sys.id
      })
      .then(response => response.items)
      .catch(error => {
        console.log(
          `\nError occurred while fetching Entries for ${contentType.name}:`
        );
        console.error(error);
      });
  }
}
