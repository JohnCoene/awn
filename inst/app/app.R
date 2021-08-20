library(shiny)
library(awn)

ui <- fluidPage(
	useAwn(),
	h1("AWN"),
	p(
		tags$a(
			"Awesome Notifications",
			href = "https://f3oall.github.io/awesome-notifications/"
		),
		"for shiny."
	),
	fluidRow(
		column(
			4,
			div(
				class = "well",
				h3("Notifications"),
				p(
					"Use the function,", code("notify()")
				),
				fluidRow(
					column(
						6,
						br(),
						actionButton(
							"notify",
							"Notify",
							class = "btn-info",
							width = "100%"
						)
					),
					column(
						6,
						selectInput(
							"type",
							"Type",
							choices = c(
								"tip", 
								"info", 
								"warning", 
								"success", 
								"alert"
							)
						)
					)
				)
			)
		),
		column(
			4,
			div(
				class = "well",
				h3("Modal"),
				p(
					"Use the function", code("modal()")
				),
				br(),
				actionButton(
					"modal",
					"Modal",
					class = "btn-info"
				)
			)
		),
		column(
			4,
			div(
				class = "well",
				h3("Ask"),
				p(
					"Prompt the user with", code("ask()")
				),
				actionButton(
					"ask",
					"Ask",
					class = "btn-info"
				),
				p("Response:"),
				verbatimTextOutput("response")
			)
		)
	)
)

server <- function(input, output, session){

	observeEvent(input$notify, {
		notify("Awesome content!", type = input$type)
	})

	observeEvent(input$modal, {
		modal(
			div(
				h1("Modal title"),
				p("Content of the modal"),
				p(
					"Click outside the modal to close it"
				)
			)
		)
	})

	observeEvent(input$ask, {
		ask("asked", "Are you sure?")
	})

	output$response <- renderPrint({
		print(input$asked)
	})

}

shinyApp(ui, server)
