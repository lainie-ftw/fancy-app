from PIL import Image

def create_image(filename, color):
    image = Image.new('RGB', (100, 100), color)
    image.save(filename)

create_image('unicorn-dev.png', 'blue')
create_image('unicorn-staging.png', 'green')
create_image('unicorn-prod.png', 'red')
