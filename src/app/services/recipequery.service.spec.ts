/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipequeryService } from './recipequery.service';

describe('RecipequeryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipequeryService]
    });
  });

  it('should ...', inject([RecipequeryService], (service: RecipequeryService) => {
    expect(service).toBeTruthy();
  }));
});
