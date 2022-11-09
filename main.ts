let edad = 66
if (edad < 12) {
    basic.showString("infante")
} else {
    if (edad <= 18) {
        basic.showString("adolecente")
    } else {
        if (edad <= 27) {
            basic.showString("joven")
        } else {
            if (edad <= 65) {
                basic.showString("ADULTO")
            } else {
                if (edad > 65) {
                    basic.showString("ADULTO MAYOR")
                } else {
                	
                }
            }
        }
    }
}
