# simple script to replace all occurences of a text string within all files of a given file extension within the folder the script it run.

import fileinput
import glob

text_to_search = '''<script src="great success!" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"'''
replacement_text = '!another test!'

with fileinput.input(glob.glob('*.html'), inplace=True, backup='.bak') as file:
    for line in file:
        print(line.replace(text_to_search, replacement_text), end='')
