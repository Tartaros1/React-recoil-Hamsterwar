function makeImg(url: string): string {
	if( import.meta.env.MODE === 'development' ) {
		//console.log('DEV MODE')
		return 'http://localhost:1338' + url
	} else {
		//console.log('PRODUCTION MODE')
		return url
	}
}

export { makeImg }
function picImport(imgName: string) {
	if (imgName.startsWith("https")){
	  return imgName

	} else {
	  return makeImg((`/img/${imgName}`))
	}
  }
  export { picImport }
