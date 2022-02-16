package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Options {
	@Id
	@GeneratedValue
	private int id;
	@ManyToOne
	@JoinColumn
	private Question que_id;
	private String options;
	private boolean correct;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOption() {
		return options;
	}
	public void setOption(String options) {
		this.options = options;
	}
	public boolean isCorrect() {
		return correct;
	}
	public void setCorrect(boolean correct) {
		this.correct = correct;
	}
	public Question getQue_id() {
		return que_id;
	}
	public void setQues_id(Question que_id) {
		this.que_id = que_id;
	}
	

}
