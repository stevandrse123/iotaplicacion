      var hora = new Date()
      var hrs = hora.getHours();
      var min = hora.getMinutes();
      var hoy = new Date();
      var m = new Array();
      var d = new Array()
      var an= hoy.getYear();
      m[0]="Enero";  m[1]="Febrero";  m[2]="Marzo";
      m[3]="Abril";   m[4]="Mayo";  m[5]="Junio";
      m[6]="Julio";    m[7]="Agosto";   m[8]="Septiembre";
      m[9]="Octubre";   m[10]="Noviembre"; m[11]="Diciembre";
      document.write("Son las "+hrs+":"+min+" (");
      document.write(hoy.getDate());
      document.write(" de ");
      document.write(m[hoy.getMonth()]);
      document.write(")");
	  
    