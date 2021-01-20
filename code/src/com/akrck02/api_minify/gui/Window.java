package com.akrck02.api_minify.gui;

import com.akrck02.api_minify.file_access.Minifier;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Optional;

public class Window extends JFrame {
    JTextField in, out;
    JTextArea text;
    JButton go;
    int W = 800, H=600;

    public Window(){
        setContentPane(getContentPane());
        draw();
        listen();

        setTitle("API Minify by Akrck02");
        setSize(W, H);
        setResizable(true);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    private void draw() {
        Container window = getContentPane();
        window.setBackground(Theme_manager.LIGHT);
        window.add(create_output(),BorderLayout.CENTER);
        window.add(create_button_bar(),BorderLayout.EAST);
    }

    private JPanel create_button_bar(){
        JPanel button_bar = new JPanel();
        button_bar.setLayout(new BorderLayout());

        button_bar.setBackground(Theme_manager.LIGHT);
        button_bar.setMinimumSize(new Dimension(W/3,0));
        button_bar.setPreferredSize(new Dimension(200,40));
        button_bar.setBorder(BorderFactory.createEmptyBorder(20,20,20,20));

        go = UI_toolkit.new_button(
                Optional.of("GO!"),
                Optional.empty(),
                Optional.of(14f),
                Optional.of(Theme_manager.MEDIUM),
                Optional.of(Theme_manager.TEXT),
                Optional.of(new Dimension(140,35)),
                Optional.of(Theme_manager.POINTER),
                Optional.of(Theme_manager.BORDER)
        );

        JPanel panel = new JPanel(new FlowLayout());
        panel.setBackground(Theme_manager.LIGHT);

        JLabel in_lbl = UI_toolkit.new_label(Optional.of("Input directory: "),Optional.of(Theme_manager.TEXT),Optional.empty(),Optional.of(Theme_manager.FONTSIZE_TEXT));
        in = UI_toolkit.new_text_field(
          Optional.empty(),
          Optional.empty(),
          Optional.empty(),
          Optional.of(Theme_manager.MEDIUM),
          Optional.of(Theme_manager.TEXT),
          Optional.of(new Dimension(150,30)),
          Optional.of(Theme_manager.BORDER)
        );

        JLabel out_lbl = UI_toolkit.new_label(Optional.of("Output file: "),Optional.of(Theme_manager.TEXT),Optional.empty(),Optional.of(Theme_manager.FONTSIZE_TEXT));
        out = UI_toolkit.new_text_field(
                Optional.empty(),
                Optional.empty(),
                Optional.empty(),
                Optional.of(Theme_manager.MEDIUM),
                Optional.of(Theme_manager.TEXT),
                Optional.of(new Dimension(150,30)),
                Optional.of(Theme_manager.BORDER)
        );
        panel.add(in_lbl);
        panel.add(in);
        panel.add(out_lbl);
        panel.add(out);

        button_bar.add(panel,BorderLayout.CENTER);
        button_bar.add(go, BorderLayout.SOUTH);
        return button_bar;
    }

    private JScrollPane create_output(){
        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());
        panel.setBackground(Theme_manager.DARK);

        JScrollPane output = new JScrollPane(panel);
        output.setHorizontalScrollBar(null);

        text = new JTextArea();
        text.setBackground(Theme_manager.DARK);
        text.setForeground(Theme_manager.TEXT);
        text.setFont(text.getFont().deriveFont(14f));
        text.setDisabledTextColor(Theme_manager.TEXT);
        text.setEnabled(false);
        text.setBorder(BorderFactory.createEmptyBorder(0,20,0,20));
        text.setLineWrap(true);
        panel.add(text);

        return output;
    }

    private void listen() {
        go.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Minifier.minify(in.getText().trim(),out.getText().trim(),text);
            }
        });
    }

    public static void main(String[] args) {new Window();}

}
