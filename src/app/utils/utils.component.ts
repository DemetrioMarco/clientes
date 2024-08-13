

export class Utils {
  private static monthsList: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  static months({ count }: { count: number }): string[] {
    if (count <= 0 || count > this.monthsList.length) {
      return [];
    }
    return this.monthsList.slice(0, count);
  }
}
