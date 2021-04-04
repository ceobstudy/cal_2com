
  function changeImg(imgObject, filName, maxNumber, curNumber, curTransparency) {
    var milSeconds = 0;
    var folName = "imagenes";
    var extName = "svg";
	 var scrwidth = screen.width;
	 var imgWidth;
	 var imgHeight;
	 var divObject;
    
	 if (scrwidth >= 1300) {
	 	
		imgWidth = "750px";
	 	imgHeight = "430px";	 	
	 	
	 } else if (scrwidth >= 1200) {
	 	
		imgWidth = "700px";
	 	imgHeight = "450px";	 	
 
	 } else {
	 	
		imgWidth = "700px";
	 	imgHeight = "450px";	 	
	 	
	 	}     
    
    if (curNumber == null) { curNumber = 0; }
    if (curTransparency == null) { curTransparency = 0; }
	 if (curTransparency == 0) {
      if (curNumber < maxNumber) { curNumber++; }
      else {  curNumber = 1; }
    imgObject.src = folName + "/" + filName + curNumber + "." + extName; }
    curTransparency += 5;
    if (curTransparency == 100) { milSeconds = 3000; } 
    else { milSeconds = 50; }
    curTransparency = (curTransparency == 100) ? 0 : curTransparency;
    imgObject = document.getElementById('Imagen');
    
         
    divObject = document.getElementById('ContImagen');
	 divObject.style.width = imgWidth;    
	 divObject.style.height = imgHeight; 
    
    divObject = document.getElementById('contCarrusel');    
	 divObject.style.height = imgHeight; 


    if (document.all) { imgObject.style.filter = 'alpha(opacity='+curTransparency+')'; } 
    else {
          if (curTransparency != 0) {
            imgObject.style.opacity = curTransparency /100;
            imgObject.style.MozOpacity = curTransparency /100;
            imgObject.style.KHTMLOpacity = curTransparency /100; } }
	 setTimeout( function() { changeImg(imgObject, filName, maxNumber, curNumber, curTransparency); }, milSeconds);
  }
