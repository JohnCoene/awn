<!-- badges: start -->
<!-- badges: end -->

# awn

[Awesome notifications](https://f3oall.github.io/awesome-notifications/) for shiny.

## Installation

Install from Github.

``` r
# install.packages("remotes")
remotes::install_github("JohnCoene/awn")
```

### Notify

Show a notification.

```r
library(awn)
library(shiny)

ui <- fluidPage(
	useAwn(),
	actionButton("show", "Show")
)

server <- function(input, output, session) {

	observeEvent(input$show, {
		type <- sample(
			c("tip", "info", "warning", "success", "alert"),
			1
		)

		notify(
			"Hello {awn}!",
			type = type
		)
	})

}

shinyApp(ui, server)
```

### Modal

Display a modal.

```r
library(awn)
library(shiny)

ui <- fluidPage(
	useAwn(),
	actionButton("show", "Show")
)

server <- function(input, output, session) {

	observeEvent(input$show, {
		modal(
			h1("Hello {awn}!")
		)
	})

}

shinyApp(ui, server)
```

### Ask

Prompt the user.

```r
library(awn)
library(shiny)

ui <- fluidPage(
	useAwn(),
	actionButton("show", "Show")
)

server <- function(input, output, session) {

	observeEvent(input$show, {
		ask(
			"confirmed", # id of input
			p("Are you sure?")
		)
	})

	observeEvent(input$confirmed, {
		print(input$confirmed)
	})

}

shinyApp(ui, server)
```
