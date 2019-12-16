import fileinput
import glob

text_to_search = 'Lorem'
replacement_text = 'Porem' 

with fileinput.input(glob.glob('*.html'), inplace=True, backup='.bak') as file:
    print('hey')
    for line in file:
        print(line.replace(text_to_search, replacement_text), end='')