import { Sequelize, Model, DataTypes } from "sequelize";

export class Book extends Model {
    public id!: number;
    public link!: string;
    public cover!: string;
    public title!: string;
    public subtitle!: string;
    public authors!: string[];
    public description!: string;
    public price!: number;
  }