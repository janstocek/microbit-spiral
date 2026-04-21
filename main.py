x = 0
y = 0
offset = 0

def on_every_interval():
    global x, y, offset
    led.toggle(x, y)
    if y == offset and x < 4 - offset:
        x += 1
    elif x == 4 - offset and y < 4 - offset:
        y += 1
    elif y == 4 - offset and x > offset:
        x += 0 - 1
    elif x == offset and y > offset:
        y += 0 - 1
    if x == offset and y == offset:
        offset += 1
        x = offset
        y = offset
    if offset == 3:
        offset = 0
        x = 0
        y = 0
loops.every_interval(200, on_every_interval)
