#Resume template generator in LaTeX
__author__ = 'Armin Namavari'
from string import Template


TEMPLATE = '''
\documentclass{article}

\setlength{\\textheight}{9.5in}
%\usepackage{fontspec}
\usepackage{geometry}
\usepackage{xcolor}
\usepackage[utf8]{inputenc}
\geometry{
 a4paper,
 total={210mm,297mm},
 left=20mm,
 right=25mm,
 top=17mm,
 bottom=17mm,
 bindingoffset=0mm
 }\usepackage{fontenc}
\usepackage{enumitem}
\setlist{nolistsep}




\\begin{document}

\\title{\\textsf{$name -- Resume}}
\\author{\\texttt{$email}  \hspace{35pt} \\textsf{$phone}}
\date{}
\maketitle

\\vspace{-0.3in}
\\rule{\linewidth}{0.4pt}
{\\fontfamily{cmss}\selectfont
\section*{\\textsf{Education}} \large
\\begin{itemize}
    $education
\end{itemize}



\section*{\\textsf{Experience}}
\\begin{itemize}
    $experience
\end{itemize}


\section*{\\textsf{Skills}}
\\begin{itemize}
    $skills
\end{itemize}


\section*{\\textsf{Projects}}
\\begin{itemize}
    $projects
\end{itemize}


\section*{\\textsf{Activities}}
\\begin{itemize}
    $activities
\end{itemize}


\section*{\\textsf{Awards}}
\\begin{itemize}
    $awards
\end{itemize}


}
\end{document}
'''
'''
--Description--
Generate resume for 3rd street kids
based on responses to a form
--Input Details--
responses: a dictionary with the following keys:
name, phone, email, education, experience,
 skills, projects, activites, awards
 (these will be inputs in the form)
 values are in list form for education, experience
 skills, projects, activites, and awards
 They are strings otherwise (name, phone, email)
...
--Output Details
LaTeX code for a spiffy looking resume
'''
def gen_resume(responses):
    temp_dict = {}
    for key in responses:
        if key in ('name', 'phone' ,'email'):
            temp_dict[key] = responses[key]#no processing required
        else:
            #need to itemize
            temp_dict[key] = ''
            for bullet in responses[key]:
                temp_dict[key] += "\\item " + bullet + " "
    return Template(TEMPLATE).substitute(**temp_dict)
















