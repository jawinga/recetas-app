export class Receta {
  constructor(
    public id: number,
    public nombre: string,
    public ingredientes: Array<string>,
    public pasos: Array<string>,
    public tiempo: number,
    public imagen: string = 'https://source.unsplash.com/400x300/?food',
    public categoria: string,
    public calorias: number,
    public descripcion: string,
    public esFavorito: boolean,
    public esVegetariano: boolean
  ) {}
}
