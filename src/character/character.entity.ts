import crypto from 'node:crypto'

export class Character {
  constructor(
    public name: string,
    public descprod: string,
    public id = crypto.randomUUID()
  ) {}
}