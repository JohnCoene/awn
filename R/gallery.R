#' Gallery
#' 
#' App to demonstrate the functions of the package.
#' 
#' @importFrom shiny shinyAppFile
#' 
#' @export 
gallery <- function(){
	path <- system.file("app/app.R", package = "awn")
	shinyAppFile(path)
}
