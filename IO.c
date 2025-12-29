#include <stdio.h>
#include <stdlib.h>
#include <time.h>

/* Function prototypes */
int gen_num(void);
void guess_number(void);

int main(void) {
    /* seed RNG */
    srand((unsigned)time(NULL));

    printf("Hello, and welcome to the number guessing game!\n\n");

    guess_number();

    printf("\nThanks for playing!\n");
    return 0;
}

int gen_num(void) {
    /* 1..100 */
    return rand() % 100 + 1;
}

void guess_number(void) {
    int num_to_guess = gen_num();
    int user_guess;
    int scanned;

    printf("Number to Guess: %d \n", num_to_guess); // For Testing

    do {
        printf("Enter your guess (1-100): ");
        scanned = scanf("%d", &user_guess);

        if (scanned != 1) {
            /* clear invalid input from stdin */
            int ch;
            while ((ch = getchar()) != '\n' && ch != EOF) { /* discard */ }
            printf("Invalid input — please enter an integer between 1 and 100.\n");
            continue;
        }

        if (user_guess < 1 || user_guess > 100) {
            printf("Out of range — enter a number from 1 to 100.\n");
            continue;
        }

        if (user_guess < num_to_guess) {
            printf("Too low - try again.\n");
        }
        else if (user_guess > num_to_guess) {
            printf("Too high - try again.\n");
        }
        else {
            printf("You got the number! Congrats!\n");
        }
    } while (user_guess != num_to_guess);
}
