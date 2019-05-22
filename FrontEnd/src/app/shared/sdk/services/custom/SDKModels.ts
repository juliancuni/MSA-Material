/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Foto } from '../../models/Foto';
import { Perdorues } from '../../models/Perdorues';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Foto: Foto,
    Perdorues: Perdorues,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
