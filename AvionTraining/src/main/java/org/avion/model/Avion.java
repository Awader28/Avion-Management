package org.avion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


// Define the entity class
@Entity
// Specify the table name in the database

@Table(name = "Hangar")
public class Avion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fid;

    @Column(name = "forigin")
    private String forigin;

    @Column(name = "flayover")
    private String flayover;

    @Column(name = "fdestination")
    private String fdestination;

    @Column(name = "fdistance")
    private Float fdistance;

    @Column(name = "ffuel")
    private Float ffuel;

    @Column(name = "fcraft")
    private String fcraft;

    @Column(name = "fintime")
    private String fintime;

    @Column(name = "fouttime")
    private String fouttime;

    public Long getFid() {
        return fid;
    }

    public void setFid(Long fid) {
        this.fid = fid;
    }

    public String getForigin() {
        return forigin;
    }

    public void setForigin(String forigin) {
        this.forigin = forigin;
    }

    public String getFlayover() {
        return flayover;
    }

    public void setFlayover(String flayover) {
        this.flayover = flayover;
    }

    public String getFdestination() {
        return fdestination;
    }

    public void setFdestination(String fdestination) {
        this.fdestination = fdestination;
    }

    public Float getFdistance() {
        return fdistance;
    }

    public void setFdistance(Float fdistance) {
        this.fdistance = fdistance;
    }

    public Float getFfuel() {
        return ffuel;
    }

    public void setFfuel(Float ffuel) {
        this.ffuel = ffuel;
    }

    public String getFcraft() {
        return fcraft;
    }

    public void setFcraft(String fcraft) {
        this.fcraft = fcraft;
    }

    public String getFintime() {
        return fintime;
    }

    public void setFintime(String fintime) {
        this.fintime = fintime;
    }

    public String getFouttime() {
        return fouttime;
    }

    public void setFouttime(String fouttime) {
        this.fouttime = fouttime;
    }

    /**
     * @param forigin
     * @param flayover
     * @param fdestination
     * @param fdistance
     * @param ffuel
     * @param fcraft
     * @param fintime
     * @param fouttime
     * @param fid
     */
    // Constructor with parameters

    public Avion(String forigin, String flayover, String fdestination, Float fdistance, Float ffuel, String fcraft,
                 String fintime, String fouttime, Long fid) {
        this.forigin = forigin;
        this.flayover = flayover;
        this.fdestination = fdestination;
        this.fdistance = fdistance;
        this.ffuel = ffuel;
        this.fcraft = fcraft;
        this.fintime = fintime;
        this.fouttime = fouttime;
        this.fid = fid;
    }
    // Default constructor
    public Avion() {

    }
    // Override the toString method
    @Override
    public String toString() {
        return "Avion [forigin=" + forigin + ", flayover=" + flayover + ", fdestination=" + fdestination
                + ", fdistance=" + fdistance + ", ffuel=" + ffuel + ", fcraft=" + fcraft + ", fintime=" + fintime
                + ", fouttime=" + fouttime + ", fid=" + fid + "]";
    }

}
