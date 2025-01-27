#' Ask
#' 
#' Create a prompt: 'confirm' or 'cancel'.
#' 
#' @param id Id of the input this defines.
#' The input that is defined returns `TRUE`
#' if the user accepts, and `FALSE` if 
#' the user rejects. See details.
#' @param content Content of the prompt,
#' question to prompt.
#' @param ... Options.
#' @param session A valid shiny session.
#' 
#' @details The `id` is used to define the input
#' so `ask(id = "xxx")` will return the response
#' of at `input$xxx`.
#' 
#' @export
ask <- function(
	id,
	content,
	...,
	session = shiny::getDefaultReactiveDomain()
) {
	msg <- list(
		id = id,
		content = as.character(content),
		ns = make_ns(session$ns(NULL))
	)
	session$sendCustomMessage("awn-ask", msg)
}

make_ns <- function(ns){
	if(length(ns) > 0)
		ns <- sprintf("%s-", ns)

	return(ns)
}