let jogada = 0
let pontos_microbit = 0
let pontos_jogador = 0
let pontos_jogador_2 = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        basic.showString("Ready Set")
        basic.showString("Go!")
        while (true) {
            jogada = randint(1, 3)
            if (jogada == 1) {
                basic.showIcon(IconNames.Diamond)
                basic.pause(200)
            } else if (jogada == 2) {
                basic.showIcon(IconNames.Chessboard)
                basic.pause(200)
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(200)
            }
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    pontos_microbit += 1
                    basic.showString("Sorry")
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    pontos_jogador += 1
                    basic.showString("You won")
                    break;
                }
            }
            if (pontos_jogador > 2 || pontos_microbit > 2) {
                break;
            }
        }
        basic.clearScreen()
        basic.showString("Placar")
        basic.showIcon(IconNames.Happy)
        basic.showString("Microbit:")
        basic.showNumber(pontos_microbit)
        basic.showIcon(IconNames.StickFigure)
        basic.showString("Jogador:")
        basic.showNumber(pontos_jogador)
        pontos_microbit = 0
        pontos_jogador = 0
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.clearScreen()
        basic.showString("Ready Set")
        basic.showString("Go!")
        while (true) {
            basic.showIcon(IconNames.Asleep)
            while (true) {
                if (input.buttonIsPressed(Button.A)) {
                    pontos_jogador += 1
                    basic.showIcon(IconNames.Yes)
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    pontos_jogador_2 += 1
                    basic.showIcon(IconNames.Yes)
                    break;
                }
            }
            if (pontos_jogador > 2 || pontos_jogador_2 > 2) {
                break;
            }
        }
        basic.clearScreen()
        basic.showString("Placar")
        basic.showString("1:")
        basic.showNumber(pontos_jogador)
        basic.clearScreen()
        basic.showString("2:")
        basic.showNumber(pontos_jogador_2)
        pontos_jogador = 0
        pontos_jogador_2 = 0
    }
})
