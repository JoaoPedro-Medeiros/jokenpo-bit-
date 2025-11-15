jogada = 0
pontos_microbit = 0
pontos_jogador = 0
pontos_jogador_2 = 0

def on_forever():
    global jogada, pontos_microbit, pontos_jogador, pontos_jogador_2
    if input.is_gesture(Gesture.SHAKE):
        basic.show_string("Ready Set")
        basic.show_string("Go!")
        while True:
            jogada = randint(1, 3)
            if jogada == 1:
                basic.show_icon(IconNames.SQUARE)
                basic.pause(200)
            elif jogada == 2:
                basic.show_icon(IconNames.CHESSBOARD)
                basic.pause(200)
            else:
                basic.show_icon(IconNames.NO)
                basic.pause(200)
            while True:
                if input.button_is_pressed(Button.A):
                    pontos_microbit += pontos_microbit + 1
                    basic.show_string("Sorry")
                    break
                elif input.button_is_pressed(Button.B):
                    pontos_jogador += pontos_jogador + 1
                    basic.show_string("You won")
                    break
            if pontos_jogador > 2 or pontos_microbit > 2:
                break
        basic.show_string("Placar")
        basic.show_icon(IconNames.HAPPY)
        basic.show_string("Microbit:")
        basic.show_number(pontos_microbit)
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.show_string("Jogador:")
        basic.show_number(pontos_jogador)
        pontos_microbit += 0
        pontos_jogador += 0
        pontos_jogador_2 += 0
    elif input.is_gesture(Gesture.SCREEN_UP):
        basic.show_string("Ready Set")
        basic.show_string("Go!")
        while True:
            basic.show_icon(IconNames.SURPRISED)
            while True:
                if input.button_is_pressed(Button.A):
                    pontos_jogador += pontos_jogador + 1
                    basic.show_icon(IconNames.HAPPY)
                    break
                elif input.button_is_pressed(Button.B):
                    pontos_jogador_2 += pontos_jogador_2 + 1
                    basic.show_icon(IconNames.HAPPY)
                    break
            if pontos_jogador > 2 or pontos_jogador_2 > 2:
                break
        basic.show_string("Placar")
        basic.show_string("1:")
        basic.show_number(pontos_jogador)
        basic.show_string("2:")
        basic.show_number(pontos_jogador_2)
        pontos_jogador += 0
        pontos_jogador_2 += 0
        pontos_microbit += 0
basic.forever(on_forever)
