       
            divMapa = document.getElementById('map');
            navigator.geolocation.getCurrentPosition(fn_ok, fn_mal); 
           
            
            function fn_mal(error) {
                var msj;
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        msj = "No se ha permitido el acceso a la posición del usuario.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        msj = "No se ha podido acceder a la información de su posición.";
                        break;
                    case error.TIMEOUT:
                        msj = "El servicio ha tardado demasiado tiempo en responder.";
                        break; 
                    default:
                        msj = "Error desconocido.";
                }
                alert('No se pudo obtener ubicación debido a que ' + msj)
            }
          

            function fn_ok(respuesta) {
                var lat = respuesta.coords.latitude; 
                var lon = respuesta.coords.longitude;

                var gLatLonUsuario = new google.maps.LatLng(lat, lon);  
                
                 var gLatLonFijo = new google.maps.LatLng(9.935920, -84.104929);

                 var objConfig = {
                    zoom: 10,
                    center: gLatLonFijo
                    
                }

                var gMapa = new google.maps.Map(divMapa, objConfig);
                var objConfigMarkerFijo = {
                    position: gLatLonFijo, 
                    map: gMapa,
                    
                }
                var objConfigMarkerUsuario = {
                    position: gLatLonUsuario,
                    map: gMapa, 
                    title: "Usted se encuentra aquí",
                    height: '2px',
                    width: '2px'
                }

                var gMarkerFijo = new google.maps.Marker(objConfigMarkerFijo);   
                var gMarkerUsuario = new google.maps.Marker(objConfigMarkerUsuario); 
                                                                                    
                var objConfigDR = {
                    map: gMapa
                }

                var objConfigDS = {
                    origin: gLatLonFijo,
                    destination: gLatLonUsuario,
                    travelMode: google.maps.TravelMode.WALKING
                }

                var ds = new google.maps.DirectionsService();
             

                var dr = new google.maps.DirectionsRenderer(
                    objConfigDR
                ); 

                ds.route(objConfigDS, fnRutear);

                function fnRutear(resultados, status) {
                    
                    if (status == 'OK') {
                        dr.setDirections(resultados);
                    } else {
                        alert('Error' + status);
                    }
                }

                
               document.getElementById("distancia").innerText = (google.maps.geometry.spherical.computeDistanceBetween(
                    gLatLonFijo,
                    gMarkerUsuario.getPosition()) / 1000).toFixed(2) + " km.";

                    document.getElementById("distanciaH").innerText = ((getDistance(gLatLonUsuario, gLatLonFijo) / 1000)
                    .toFixed(2) + " km.");
               } 






