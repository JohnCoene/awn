#' Modal
#' 
#' Show a modal.
#' 
#' @param content Content to display.
#' @param ... Options to pass to the notification.
#' @param session A valid shiny `session`.
#' 
#' @export
modal <- function(
  content,
  ...,
  session = shiny::getDefaultReactiveDomain()
){
  msg <- list(
    content = as.character(content),
    ns = session$ns(NULL),
    opts = list(...)
  )
  session$sendCustomMessage("awn-modal", msg)
}
