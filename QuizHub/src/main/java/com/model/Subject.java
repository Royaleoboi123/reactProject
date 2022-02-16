package com.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;

@Entity
public class Subject {
	@Id
	@GeneratedValue
	private int id;
	private String subject;
	@OneToMany(mappedBy = "sub_id")
	private List<Question> questions;
	@OneToMany(mappedBy ="subject")
	private List <ScoreTable> score;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	public List<ScoreTable> getScore() {
		return score;
	}
	public void setScore(List<ScoreTable> score) {
		this.score = score;
	}
	
}
