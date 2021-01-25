package com.akrck02.api_minify.gui;

import javax.swing.*;
import javax.swing.border.Border;
import javax.swing.text.html.Option;
import java.awt.*;
import java.util.Optional;

public class UI_toolkit {

    public static void font(Optional<JComponent> c , Optional<Float> size){
        if(c.isEmpty()) return;
        c.get().setFont(c.get().getFont().deriveFont(size.orElse(11f)));
    }

    public static JButton new_button(Optional<String> text, Optional<Font>font, Optional<Float> font_size, Optional<Color> background,
                                     Optional<Color> foreground, Optional<Dimension> size, Optional<Cursor> cursor, Optional<Border> border){
        JButton btn = new JButton(text.orElse("Ok"));
        btn.setBackground(background.orElse(Color.white));
        btn.setForeground(foreground.orElse(Color.black));
        btn.setFont(font.orElse(btn.getFont()).deriveFont(font_size.orElse(11f)));

        if(size.isPresent()) btn.setPreferredSize(size.get());
        if(cursor.isPresent()) btn.setCursor(cursor.get());
        if(border.isPresent()) btn.setBorder(border.get());

        return btn;
    }

    public static JTextField new_text_field(Optional<String> text, Optional<Font>font, Optional<Float> font_size, Optional<Color> background,
                                            Optional<Color> foreground, Optional<Dimension> size, Optional<Border> border){
        JTextField txt = new JTextField(text.orElse(""));
        txt.setBackground(background.orElse(Color.white));
        txt.setForeground(foreground.orElse(Color.black));
        txt.setFont(font.orElse(txt.getFont()).deriveFont(font_size.orElse(11f)));

        if(size.isPresent()) txt.setPreferredSize(size.get());
        if(border.isPresent()) txt.setBorder(border.get());

        return txt;
    }

    public static JLabel new_label(Optional<String> text, Optional<Color> foreground, Optional<Font> font ,Optional<Float> font_size){
        JLabel lbl = new JLabel(text.orElse(""));
        lbl.setForeground(foreground.orElse(Color.black));
        lbl.setFont(font.orElse(lbl.getFont()).deriveFont(font_size.orElse(11f)));
        return lbl;
    }

    public static JComboBox<String> new_combo_box(){
        JComboBox<String> box = new JComboBox<String>();

        return box;
    }

}
