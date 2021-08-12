#' Dependencies
#' 
#' Include dependencies, place anywhere in the shiny UI.
#' 
#' @importFrom shiny icon
#' @importFrom htmltools htmlDependency htmlDependencies tagList
#' 
#' @export
useAwn <- function(){
  dep <- htmlDependency(
    "awn",
    version = utils::packageVersion("awn"),
    package = "awn",
    src = "packer",
    script = c(file = "notifications.js")
  )

  tagList(
    htmlDependencies(icon("user")),
    dep
  )
}

#' Global Options
#' 
#' Define global options.
#' 
#' @param ... Options.
#' @param session A valid shiny session.
#' 
#' @export
awn_globals <- function(
  ...,
  session = shiny::getDefaultReactiveDomain()
){
  msg <- list(
    options = list(...),
    ns = session$ns(NULL)
  )
  session$sendCustomMessage("awn-globals", msg)
}
