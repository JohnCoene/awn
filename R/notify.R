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
  type = c("tip", "info", "warning", "success", "alert", "error"),
  ...,
  session = shiny::getDefaultReactiveDomain()
) {
  type <- match.arg(type)

  if (type == "error") {
    type <- "alert"
  }

  msg <- list(
    type = type,
    content = as.character(content),
    ns = session$ns(NULL),
    options = list(...)
  )
  session$sendCustomMessage("awn-notify", msg)
}
