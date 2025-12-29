from PyQt5.QtWidgets import QApplication
from ui.main_window import TextbookPricingMainWindow

import sys

def load_theme(theme_name):
    try:
        with open(f"ui/{theme_name}.qss", "r") as f:
            app.setStyleSheet(f.read())
    except FileNotFoundError:
        print(f"Theme {theme_name} not found. Using default.")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = TextbookPricingMainWindow()

    # change here to switch themes
    load_theme("styles_liquidglass")

    window.show()
    sys.exit(app.exec_())
