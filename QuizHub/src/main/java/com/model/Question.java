package com.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Question {
	@Id
	@GeneratedValue
	private int id;
	private String question;
	@ManyToOne
	@JoinColumn
	private Subject sub_id;
	@OneToMany(mappedBy = "que_id", cascade = CascadeType.PERSIST)
	private List<Options> options;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<Options> getOptions() {
		return options;
	}

	public void setOptions(List<Options> options) {
		this.options = options;
	}

	public Subject getSub_id() {
		return sub_id;
	}

	public void setSub_id(Subject sub_id) {
		this.sub_id = sub_id;
	}
	
	
}
