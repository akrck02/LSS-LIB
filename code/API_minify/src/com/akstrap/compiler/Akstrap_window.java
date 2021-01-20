package com.akstrap.compiler;

import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;
import java.awt.event.*;

public class Akstrap_window extends JFrame {
    Color dark,light,medium,white;
    Border border,lightborder;
    Cursor pointer;

    JTextField in, out;
    JTextArea text;
    JButton go;

    int W = 800, H=600;

    public Akstrap_window(){
        setContentPane(getContentPane());
        dark = new Color(0xfafafa);
        light = new Color(255,255,255);
        medium = new Color(0xfcfcfc);
        white = new Color(0x404040);

        border = BorderFactory.createLineBorder(white);
        lightborder = BorderFactory.createLineBorder(light);
        pointer = new Cursor(12);
        draw();
        listen();

        setTitle("Akstrap compiler v0.1");
        setSize(W, H);
        setResizable(true);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    private void draw() {
        Container window = getContentPane();
        window.setBackground(light);
        window.add(create_output(),BorderLayout.CENTER);
        window.add(create_button_bar(),BorderLayout.EAST);
    }

    private JPanel create_button_bar(){
        JPanel button_bar = new JPanel();
        button_bar.setLayout(new BorderLayout());

        button_bar.setBackground(light);
        button_bar.setMinimumSize(new Dimension(W/3,0));
        button_bar.setPreferredSize(new Dimension(200,40));
        button_bar.setBorder(BorderFactory.createEmptyBorder(20,20,20,20));

        go = new JButton("GO!");
        go.setBackground(medium);
        go.setFocusable(false);
        go.setFont(go.getFont().deriveFont(14f));
        go.setForeground(white);
        go.setPreferredSize(new Dimension(140,35));
        go.setCursor(pointer);
        go.setBorder(border);

        JPanel panel = new JPanel(new FlowLayout());
        panel.setBackground(light);

        JLabel in_lbl = new JLabel("Input directory: ");
        in_lbl.setForeground(white);
        in_lbl.setFont(go.getFont().deriveFont(14f));
        in = new JTextField();
        in.setBackground(medium);
        in.setForeground(white);
        in.setBorder(border);
        in.setPreferredSize(new Dimension(150,30));

        JLabel out_lbl = new JLabel("Output file: ");
        out_lbl.setForeground(white);
        out_lbl.setFont(go.getFont().deriveFont(14f));

        out = new JTextField();
        out.setBackground(light);
        out.setForeground(white);
        out.setBorder(border);
        out.setPreferredSize(new Dimension(150,30));

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
        panel.setBackground(dark);

        JScrollPane output = new JScrollPane(panel);
        output.setHorizontalScrollBar(null);

        text = new JTextArea();
        text.setBackground(dark);
        text.setForeground(white);
        text.setFont(text.getFont().deriveFont(14f));
        text.setDisabledTextColor(white);
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
                Compiler.compile(in.getText().trim(),out.getText().trim(),text);
            }
        });
    }

    public static void main(String[] args) {
        new Akstrap_window();
    }

}
