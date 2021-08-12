#' Notify
#' 
#' Show a notification.
#' 
#' @param content Content to display.
#' @param type Type of notification.
#' @param ... Options to pass to the notification.
#' @param session A valid shiny `session`.
#' 
#' @export
notify <- function(
  content,
  type = c("tip", "info", "warning", "success", "alert"),
  ...,
  session = shiny::getDefaultReactiveDomain()
){
  msg <- list(
    type = match.arg(type),
    content = as.character(content),
    ns = session$ns(NULL),
    options = list(...)
  )
  session$sendCustomMessage("awn-notify", msg)
}
