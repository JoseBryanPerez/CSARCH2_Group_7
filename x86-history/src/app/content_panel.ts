export interface content{
    image:string,
    title:string,
    body1:string,
    simulatorBody:string,
    image2?:string,
    subtitle1?:string,
    body2?:string,
}

export const content_panel:Record<string,content>={
    ENIAC:{
        image:"/image",
        title:"ENIAC",
        body1:"During World War II,  John Mauchley, an American physicist, and J. Prepser Eckert, an American engineer, was developing the Electronic Numerical Integrator and Computer (ENIAC) as part of a government-funded project. During its development from 1943 to 1945,  its original use was for military applications such as computing values for artillery firing tables and building hydrogen bombs. The ENIAC is an enormous machine composed of 18000 vacuum tubes that covers the 1500-square-foot room at the Moore School. Using vacuum tube technology, it enables faster processing compared to the electromechanical calculating machines during the time. In terms of setting instructions, the ENIAC uses plugboards to relay these instructions which makes the computer not slowed down by its mechanical parts. Unfortunately, a drawback with using plugboards is that the plugboard needs to be rewired in order to solve another problem for the machine. While it is tedious to manually reconfigure the plugboard, it nonetheless set a milestone for future computers to evolve with their architecture.",
        simulatorBody:"SIMULATORRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSS"
    },

    UNIVAC:{
        image:"/image",
        title:"UNIVAC",
        body1:"After the creation of the ENIAC, Mauchley and Eckert partnered to form the Eckert-Mauchly Computer Corporation. However, financial trouble had occurred to them hindering the progress of their new project called the Universal  Automation Computer (UNIVAC). To continue working on the UNIVAC, the company was acquired under Remington Rand in 1950. In 1951, the first UNIVAC was delivered to Census Bureau and they declared it as the first commercially digital computer to be released in the United States. Compared to ENIAC, the first UNIVAC uses magnetic tape and 5000 vacuum tubes for input and output handling. For improvements to instructions, it is able to accept instructions every 1/60 second through magnetic tape. The content of the instructions is composed of 6 decimal digits with the first 2 being the function code, the third as unused, and the remaining as the memory address. For memory, it uses mercury delay lines which allows data storage that reduces the amount of vacuum tubes needed for it.  The UNIVAC serves as an achievement for how computers could be produced in mass scale while retaining its powerful computations.",
        simulatorBody:"idk"
    },

    IBM701:{
        image:"/image",
        title:"IBM 701",
        body1:"When the Korean War broke out, IBM CEO, Thomas Watson asked the   government how the company could help. They were tasked with building a computer that would handle time consuming calculations in a matter of minutes to contribute to national defense. An IBM design team started development on the third floor of a factory in New York then at an abandoned supermarket on the “Defense Calculator”, officially known as the IBM 701. With the advent of stored programs, programmers could now write actual programs as sequences of instructions defined by the machine’s ISA, though they had to program using only machine code and prepared as punched paper tapes or punch cards, making it tiresome and prone to errors.",
        simulatorBody:"idk"
    },

    CDC6600:{
        image:"/image",
        title:"CDC 6600",
        body1:"Machine code was practically ineligible outside of experts, so some programmers made annotations next to the machine code to make it more readable for other programmers, which was the spark for the first assembler. Maurice Wilkes, along with David Wheeler provided one of the first real implementations of an assembler with their work on EDSAC, which allowed the usage of symbolic mnemonics instead of machine code to write programs. The 6600 has a central scientific processor supported by 10 fast peripheral processors that handled input/output operations. The arhictecture only has 65 instructions which is why the 6600 architecture is cited as the first reduced instruction set computer (RISC)",
        simulatorBody:"idk"
    },

    CISC:{
        image:"/image",
        title:"Emergence of CISC",
        body1:"Hardware vendors such as IBM developed their own ISAs and their own Assembly language. Intel joined in 1971 with 4004, the company’s first microprocessor, and then the 8008 in 1974, the world’s first 8-bit processor. The 8008 went on to power the Altair 8800, which was one of the first popular personal computers. In 1978, Intel’s 8086 established the x86 ISA which was introduced as a 16-bit extension to the 8008. It included 16-bit registers and segmented memory. It was extended to 32 -bit with Intel’s 80386 and to 64-bit by AMD in the 2000.",
        simulatorBody:"idk"
    },

    NASM:{
        image:"/image",
        title:"x86-64 NASM AL",
        body1:"As x86 became the standard, multiple assemblers were developed to translate the x86 assembly into machine code. These include: TASM (Borland), GAS(GNU), and MASM(Microsoft). Each of these assemblers came with its own tradeoffs, MASM output OMF files and supported a large assembly language with unintuitive memory addressing. GAS used ATT syntax that many programmers disliked. TASM aimed to be compatible with MASM, therefore it shares a lot of its tradeoffs. Simon Tatham developed NASM as a reaction to the mainstream assemblers, coming across a newsgroup discussion where someone was complaining that no compiler that is decent and free, since all the other options were either not free or not decent or neither. So he took it upon himself to develop one.  NASM is free,  open source and could output to multiple formats.",
        simulatorBody:"idk"
    }

}