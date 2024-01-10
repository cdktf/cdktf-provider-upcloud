# `dataUpcloudManagedDatabasePostgresqlSessions` Submodule <a name="`dataUpcloudManagedDatabasePostgresqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabasePostgresqlSessions <a name="DataUpcloudManagedDatabasePostgresqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessions;

DataUpcloudManagedDatabasePostgresqlSessions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .offset(java.lang.Number)
//  .order(java.lang.String)
//  .sessions(IResolvable)
//  .sessions(java.util.List<DataUpcloudManagedDatabasePostgresqlSessionsSessions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.limit">limit</a></code> | <code>java.lang.Number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.offset">offset</a></code> | <code>java.lang.Number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.sessions">sessions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>></code> | sessions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.limit"></a>

- *Type:* java.lang.Number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.offset"></a>

- *Type:* java.lang.Number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.sessions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>>

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions"></a>

```java
public void putSessions(IResolvable OR java.util.List<DataUpcloudManagedDatabasePostgresqlSessionsSessions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId"></a>

```java
public void resetId()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset"></a>

```java
public void resetOffset()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions"></a>

```java
public void resetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessions;

DataUpcloudManagedDatabasePostgresqlSessions.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessions;

DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessions;

DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessions;

DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput">sessionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions"></a>

```java
public DataUpcloudManagedDatabasePostgresqlSessionsSessionsList getSessions();
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput"></a>

```java
public java.lang.Object getSessionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsConfig <a name="DataUpcloudManagedDatabasePostgresqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig;

DataUpcloudManagedDatabasePostgresqlSessionsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .offset(java.lang.Number)
//  .order(java.lang.String)
//  .sessions(IResolvable)
//  .sessions(java.util.List<DataUpcloudManagedDatabasePostgresqlSessionsSessions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service">service</a></code> | <code>java.lang.String</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit">limit</a></code> | <code>java.lang.Number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset">offset</a></code> | <code>java.lang.Number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions">sessions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>></code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions"></a>

```java
public java.lang.Object getSessions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>>

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

### DataUpcloudManagedDatabasePostgresqlSessionsSessions <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions;

DataUpcloudManagedDatabasePostgresqlSessionsSessions.builder()
//  .backendXid(java.lang.Number)
//  .backendXmin(java.lang.Number)
//  .clientHostname(java.lang.String)
//  .xactStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid">backendXid</a></code> | <code>java.lang.Number</code> | Top-level transaction identifier of this service, if any. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin">backendXmin</a></code> | <code>java.lang.Number</code> | The current service's xmin horizon. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname">clientHostname</a></code> | <code>java.lang.String</code> | Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart">xactStart</a></code> | <code>java.lang.String</code> | Time when this process' current transaction was started, or null if no transaction is active. |

---

##### `backendXid`<sup>Optional</sup> <a name="backendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid"></a>

```java
public java.lang.Number getBackendXid();
```

- *Type:* java.lang.Number

Top-level transaction identifier of this service, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}

---

##### `backendXmin`<sup>Optional</sup> <a name="backendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin"></a>

```java
public java.lang.Number getBackendXmin();
```

- *Type:* java.lang.Number

The current service's xmin horizon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}

---

##### `clientHostname`<sup>Optional</sup> <a name="clientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname"></a>

```java
public java.lang.String getClientHostname();
```

- *Type:* java.lang.String

Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}

---

##### `xactStart`<sup>Optional</sup> <a name="xactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart"></a>

```java
public java.lang.String getXactStart();
```

- *Type:* java.lang.String

Time when this process' current transaction was started, or null if no transaction is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsSessionsList <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList;

new DataUpcloudManagedDatabasePostgresqlSessionsSessionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get"></a>

```java
public DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>>

---


### DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_postgresql_sessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference;

new DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid">resetBackendXid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin">resetBackendXmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname">resetClientHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart">resetXactStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendXid` <a name="resetBackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid"></a>

```java
public void resetBackendXid()
```

##### `resetBackendXmin` <a name="resetBackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin"></a>

```java
public void resetBackendXmin()
```

##### `resetClientHostname` <a name="resetClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname"></a>

```java
public void resetClientHostname()
```

##### `resetXactStart` <a name="resetXactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart"></a>

```java
public void resetXactStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart">backendStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType">backendType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort">clientPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid">datid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname">datname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration">queryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart">queryStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange">stateChange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename">usename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid">usesysid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent">waitEvent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType">waitEventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput">backendXidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput">backendXminInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput">clientHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput">xactStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid">backendXid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin">backendXmin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname">clientHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart">xactStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `backendStart`<sup>Required</sup> <a name="backendStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart"></a>

```java
public java.lang.String getBackendStart();
```

- *Type:* java.lang.String

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType"></a>

```java
public java.lang.String getBackendType();
```

- *Type:* java.lang.String

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr"></a>

```java
public java.lang.String getClientAddr();
```

- *Type:* java.lang.String

---

##### `clientPort`<sup>Required</sup> <a name="clientPort" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort"></a>

```java
public java.lang.Number getClientPort();
```

- *Type:* java.lang.Number

---

##### `datid`<sup>Required</sup> <a name="datid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid"></a>

```java
public java.lang.Number getDatid();
```

- *Type:* java.lang.Number

---

##### `datname`<sup>Required</sup> <a name="datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname"></a>

```java
public java.lang.String getDatname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `queryDuration`<sup>Required</sup> <a name="queryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration"></a>

```java
public java.lang.String getQueryDuration();
```

- *Type:* java.lang.String

---

##### `queryStart`<sup>Required</sup> <a name="queryStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart"></a>

```java
public java.lang.String getQueryStart();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateChange`<sup>Required</sup> <a name="stateChange" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange"></a>

```java
public java.lang.String getStateChange();
```

- *Type:* java.lang.String

---

##### `usename`<sup>Required</sup> <a name="usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename"></a>

```java
public java.lang.String getUsename();
```

- *Type:* java.lang.String

---

##### `usesysid`<sup>Required</sup> <a name="usesysid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid"></a>

```java
public java.lang.Number getUsesysid();
```

- *Type:* java.lang.Number

---

##### `waitEvent`<sup>Required</sup> <a name="waitEvent" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent"></a>

```java
public java.lang.String getWaitEvent();
```

- *Type:* java.lang.String

---

##### `waitEventType`<sup>Required</sup> <a name="waitEventType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType"></a>

```java
public java.lang.String getWaitEventType();
```

- *Type:* java.lang.String

---

##### `backendXidInput`<sup>Optional</sup> <a name="backendXidInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput"></a>

```java
public java.lang.Number getBackendXidInput();
```

- *Type:* java.lang.Number

---

##### `backendXminInput`<sup>Optional</sup> <a name="backendXminInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput"></a>

```java
public java.lang.Number getBackendXminInput();
```

- *Type:* java.lang.Number

---

##### `clientHostnameInput`<sup>Optional</sup> <a name="clientHostnameInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput"></a>

```java
public java.lang.String getClientHostnameInput();
```

- *Type:* java.lang.String

---

##### `xactStartInput`<sup>Optional</sup> <a name="xactStartInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput"></a>

```java
public java.lang.String getXactStartInput();
```

- *Type:* java.lang.String

---

##### `backendXid`<sup>Required</sup> <a name="backendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid"></a>

```java
public java.lang.Number getBackendXid();
```

- *Type:* java.lang.Number

---

##### `backendXmin`<sup>Required</sup> <a name="backendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin"></a>

```java
public java.lang.Number getBackendXmin();
```

- *Type:* java.lang.Number

---

##### `clientHostname`<sup>Required</sup> <a name="clientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname"></a>

```java
public java.lang.String getClientHostname();
```

- *Type:* java.lang.String

---

##### `xactStart`<sup>Required</sup> <a name="xactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart"></a>

```java
public java.lang.String getXactStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>

---



