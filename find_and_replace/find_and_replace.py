# simple script to replace all occurences of a text string within all files of a given file extension within the folder the script is run.
# Problems: can only edit single lines as input method iterates by line, ide indicating problems with code syntax @ line 14 but it runs.

# Make sure to run using python3

import fileinput
import glob

text_to_search = '''!another test!'''
replacement_text = '!another thing to try!'

try:
    with fileinput.input(glob.glob('*.html'), inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace(text_to_search, replacement_text), end='')

except:
    print('ERROR')
