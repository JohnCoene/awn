#' Modal
#' 
#' Show a modal.
#' 
#' @param content Content to display.
#' @param ... Options to pass to the notification.
#' @param session A valid shiny `session`.
#' @param .onShown JavaScript callback to run after the
#' modal is displayed.
#' 
#' @export
modal <- function(
  content,
  ...,
  .onShown = NULL,
  session = shiny::getDefaultReactiveDomain()
){
  msg <- list(
    content = as.character(content),
    ns = session$ns(NULL),
    opts = list(...),
    onShown = .onShown
  )
  session$sendCustomMessage("awn-modal", msg)
}
