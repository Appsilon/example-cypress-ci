library(shiny)

ui <- fluidPage(
  textInput("name", "Name"),
  actionButton("greet", "Greet"),
  textOutput("greeting"),
  textOutput("error_text")
)

server <- function(input, output) {
  output$greeting <- renderText({
    paste("Hello,", input$name)
  }) |>
    bindEvent(input$greet)
  output$error_text <- renderText(({
    first_letter <- substr(input$name, 1, 1)
    validate(
      need(
        first_letter == toupper(first_letter),
        "Name should start with a capital letter"
      )
    )
    "The name is valid!"
  }))
}

shinyApp(ui = ui, server = server, options = list(port = 5555))
