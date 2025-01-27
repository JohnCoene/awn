% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/modal.R
\name{modal}
\alias{modal}
\title{Modal}
\usage{
modal(
  content,
  ...,
  .onShown = NULL,
  session = shiny::getDefaultReactiveDomain()
)
}
\arguments{
\item{content}{Content to display.}

\item{...}{Options to pass to the notification.}

\item{.onShown}{JavaScript callback to run after the
modal is displayed.}

\item{session}{A valid shiny \code{session}.}
}
\description{
Show a modal.
}
